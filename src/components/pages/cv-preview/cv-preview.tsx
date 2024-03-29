import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Fragment, useMemo, useRef } from 'react'
import { format, parseISO } from 'date-fns'
import { useCv, useCvProjects, useCvSkills, usePdfExport } from 'hooks/use-cvs'
import { PageLoader } from '@atoms/page-loader'
import { prepareHtml } from 'helpers/prepare-html'
import { downloadPdf } from 'helpers/download-pdf'
import { sortDates } from 'helpers/table-sort.helper'
import { SortOrder } from 'constants/table-sort.constants'
import * as Styled from './cv-preview.styles'

const CvPreview = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)
  const { groups, loading: loadingSkills } = useCvSkills(cvId)
  const { projects } = useCvProjects(cvId)
  const [exportPdf, { loading: loadingPdf }] = usePdfExport()

  const sortedProjects = useMemo(() => {
    return [...projects].sort(sortDates('end_date', SortOrder.Desc))
  }, [projects])

  const handleExport = () => {
    if (!ref.current) {
      return
    }

    exportPdf({
      variables: {
        pdf: {
          html: prepareHtml(ref.current),
          margin: {
            top: '15mm',
            bottom: '15mm',
            left: '12mm',
            right: '12mm'
          }
        }
      }
    }).then(({ data }) => {
      cv && data && downloadPdf({ name: cv.name, base64: data.exportPdf })
    })
  }

  if (loading || !cv || loadingSkills) {
    return <PageLoader />
  }

  return (
    <Styled.Document ref={ref} maxWidth="md">
      <Styled.Head>
        <Typography variant="h4">{cv.user?.profile.full_name}</Typography>
        <Styled.Position>{cv.user?.position_name}</Styled.Position>
        <Styled.Export variant="outlined" disabled={loadingPdf} onClick={handleExport}>
          {t('Export PDF')}
        </Styled.Export>
      </Styled.Head>
      <Styled.Summary>
        <Styled.Left>
          <Styled.Title>{t('Education')}</Styled.Title>
          <Typography>{cv.education || t('No education')}</Typography>
          <Styled.Title>{t('Language proficiency')}</Styled.Title>
          {cv.languages.map(({ name, proficiency }) => (
            <Typography key={name}>
              {name} — {proficiency}
            </Typography>
          ))}
          <Styled.Title>{t('Domains')}</Styled.Title>
          <Typography>{sortedProjects.map(({ domain }) => domain).join(', ')}</Typography>
        </Styled.Left>
        <Styled.Main>
          <Styled.Title>{cv.name}</Styled.Title>
          <Typography>{cv.description}</Typography>
          {Object.entries(groups).map(([category, skills]) => (
            <Fragment key={category}>
              <Styled.Title>{t(category)}</Styled.Title>
              <Typography>{skills.map((skill) => skill.name).join(', ')}</Typography>
            </Fragment>
          ))}
        </Styled.Main>
      </Styled.Summary>
      <Styled.PageBreak />
      <Styled.Head>
        <Typography variant="h4">{t('Projects')}</Typography>
      </Styled.Head>
      {sortedProjects.map(
        ({ id, name, description, start_date, end_date, roles, responsibilities }) => (
          <Styled.Project key={id}>
            <Styled.Left>
              <Styled.ProjectName>{name}</Styled.ProjectName>
              <Typography>{description}</Typography>
            </Styled.Left>
            <Styled.Main>
              <Styled.Title>{t('Project roles')}</Styled.Title>
              <Typography>{roles.join(', ') || cv.user?.position_name}</Typography>
              <Styled.Title>{t('Responsibilities & achievements')}</Styled.Title>
              <Typography>{responsibilities.join(', ')}</Typography>
              <Styled.Title>{t('Period')}</Styled.Title>
              <Typography>
                {format(parseISO(start_date), 'M.yyyy')} –{' '}
                {end_date ? format(parseISO(end_date), 'M.yyyy') : t('Till now')}
              </Typography>
              {/* <Styled.Title>{t('Environment')}</Styled.Title> */}
            </Styled.Main>
          </Styled.Project>
        )
      )}
    </Styled.Document>
  )
}

export default CvPreview

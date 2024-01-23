import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Fragment, useRef } from 'react'
import { useCv, useCvSkills, usePdfExport } from 'hooks/use-cvs'
import { PageLoader } from '@atoms/page-loader'
import { prepareHtml } from 'helpers/prepare-html'
import { downloadPdf } from 'helpers/download-pdf'
import * as Styled from './cv-preview.styles'

const CvPreview = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)
  const { groups, loading: loadingSkills } = useCvSkills(cvId)
  const [exportPdf, { loading: loadingPdf }] = usePdfExport()

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
      <Styled.Left>
        <Styled.Title>{t('Education')}</Styled.Title>
        <Typography>{cv.education || t('No education')}</Typography>
        <Styled.Title>{t('Language proficiency')}</Styled.Title>
        {cv.languages.map(({ name, proficiency }) => (
          <Typography key={name}>
            {name} — {proficiency}
          </Typography>
        ))}
        {/* <Styled.Title>{t('Domains')}</Styled.Title>
        <Typography>TODO: derive domains from projects</Typography> */}
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
      <Styled.PageBreak />
      <Styled.Head>
        <Typography variant="h4">{t('Projects')}</Typography>
      </Styled.Head>
    </Styled.Document>
  )
}

export default CvPreview

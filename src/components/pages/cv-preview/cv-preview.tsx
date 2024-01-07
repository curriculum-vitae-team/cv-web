import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useCv, usePdfExport } from 'hooks/use-cvs'
import { PageLoader } from '@atoms/page-loader'
import { prepareHtml } from 'helpers/prepare-html'
import { downloadPdf } from 'helpers/download-pdf'
import * as Styled from './cv-preview.styles'

const CvPreview = () => {
  const ref = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)
  const [exportPdf, { loading: exporting }] = usePdfExport()

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

  if (loading || !cv) {
    return <PageLoader />
  }

  return (
    <Styled.Document ref={ref}>
      <Styled.Head>
        <Typography variant="h4">{cv.user?.profile.full_name}</Typography>
        <Styled.Position>{cv.user?.position_name}</Styled.Position>
        <Styled.Export variant="outlined" disabled={exporting} onClick={handleExport}>
          {t('Export PDF')}
        </Styled.Export>
      </Styled.Head>
      <Styled.Left>
        <Styled.Title>{t('Language proficiency')}</Styled.Title>
        {cv.languages.map(({ language_name, proficiency }) => (
          <Typography key={language_name}>
            {language_name} — {proficiency}
          </Typography>
        ))}
      </Styled.Left>
      <Styled.Main>
        <Styled.Title>{cv.name}</Styled.Title>
        <Typography>{cv.description}</Typography>
        <Styled.Title>{t('Programming languages')}</Styled.Title>
        <Styled.Title>{t('Programming technologies')}</Styled.Title>
        <Styled.Title>{t('Integrated development environment')}</Styled.Title>
        <Styled.Title>{t('Source control systems')}</Styled.Title>
        <Styled.Title>{t('Other')}</Styled.Title>
        <Styled.Title>{t('Database management system')}</Styled.Title>
      </Styled.Main>
      <Styled.PageBreak />
      <Styled.Head>
        <Typography variant="h4">{t('Projects')}</Typography>
      </Styled.Head>
    </Styled.Document>
  )
}

export default CvPreview

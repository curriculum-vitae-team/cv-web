import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useCv } from 'hooks/use-cvs'
import { PageLoader } from '@atoms/page-loader'
import * as Styled from './cv-preview.styles'

const CvPreview = () => {
  const { t } = useTranslation()
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)

  if (loading || !cv) {
    return <PageLoader />
  }

  return (
    <Styled.Page>
      <Styled.Head>
        <Typography variant="h4">{cv.user?.profile.full_name}</Typography>
        <Styled.Position>{cv.user?.position_name}</Styled.Position>
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
      <Styled.Head>
        <Typography variant="h4">{t('Projects')}</Typography>
      </Styled.Head>
    </Styled.Page>
  )
}

export default CvPreview

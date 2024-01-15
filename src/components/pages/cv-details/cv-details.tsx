import { useParams } from 'react-router-dom'
import { Container } from '@mui/material'
import { useCv } from 'hooks/use-cvs'
import { CvDetailsForm } from '@organisms/cv-details-form'
import { PageLoader } from '@atoms/page-loader'

const CvDetails = () => {
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)

  if (!cv || loading) {
    return <PageLoader />
  }

  return (
    <Container maxWidth="md">
      <CvDetailsForm cv={cv} />
    </Container>
  )
}

export default CvDetails

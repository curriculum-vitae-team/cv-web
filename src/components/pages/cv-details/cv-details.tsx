import { useParams } from 'react-router-dom'
import { useCv } from 'hooks/use-cvs'
import { CvDetailsForm } from '@organisms/cv-details-form'
import { PageLoader } from '@atoms/page-loader'
import * as Styled from './cv_details.styles'

const CvDetails = () => {
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)

  if (!cv || loading) {
    return <PageLoader />
  }

  return (
    <Styled.Details maxWidth="md">
      <CvDetailsForm cv={cv} />
    </Styled.Details>
  )
}

export default CvDetails

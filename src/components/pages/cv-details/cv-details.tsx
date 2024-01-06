import { useParams } from 'react-router-dom'
import { useCv } from 'hooks/use-cvs'
import { CvDetailsForm } from '@organisms/cv-details-form'

const CvDetails = () => {
  const { cvId = '' } = useParams()
  const { cv, loading } = useCv(cvId)

  if (!cv || loading) {
    return null
  }

  return <CvDetailsForm cv={cv} />
}

export default CvDetails

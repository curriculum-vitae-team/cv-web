import { Cv } from 'cv-graphql'

export type CVsResult = {
  cvs: Cv[]
}

export type CvResult = {
  cv: Cv
}

export type CreateCvResult = {
  createCv: Cv
}

export type UpdateCvResult = {
  updateCv: Cv
}

export type ExportPdfResult = {
  exportPdf: string
}

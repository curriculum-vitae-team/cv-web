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

export type AddCvSkillResult = {
  addCvSkill: Cv
}

export type UpdateCvSkillResult = {
  updateCvSkill: Cv
}

export type DeleteCvSkillResult = {
  deleteCvSkill: Cv
}

export type AddCvProjectResult = {
  addCvProject: Cv
}

export type RemoveCvProjectResult = {
  removeCvProject: Cv
}

export type ExportPdfResult = {
  exportPdf: string
}

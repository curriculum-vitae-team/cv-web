import { Proficiency } from 'cv-graphql'

export const getProficiencyColor = (proficiency: Proficiency) => {
  switch (proficiency) {
    case Proficiency.A1:
    case Proficiency.A2: {
      return 'secondary'
    }

    case Proficiency.B1: {
      return 'info'
    }

    case Proficiency.B2: {
      return 'success'
    }

    case Proficiency.C1:
    case Proficiency.C2: {
      return 'warning'
    }

    case Proficiency.Native:
    default: {
      return 'primary'
    }
  }
}

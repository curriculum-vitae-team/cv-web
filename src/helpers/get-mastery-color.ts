import { Mastery } from 'cv-graphql'

export const getMasteryColor = (mastery: Mastery) => {
  switch (mastery) {
    case Mastery.Novice: {
      return 'secondary'
    }

    case Mastery.Advanced: {
      return 'info'
    }

    case Mastery.Competent: {
      return 'success'
    }

    case Mastery.Proficient: {
      return 'warning'
    }

    case Mastery.Expert:
    default: {
      return 'primary'
    }
  }
}

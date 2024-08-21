import type { SkillCategory, SkillMastery } from 'cv-graphql'

const mapCategories = (categories: SkillCategory[]) => {
  const result: Record<string, SkillCategory> = {}

  return categories.reduce((acc, cur) => {
    acc[cur.id] = cur

    return acc
  }, result)
}

const prepareCategories = (categories: SkillCategory[]) => {
  const result: Record<string, SkillMastery[]> = {}

  categories.forEach((category) => {
    result[category.name] = []
  })

  return result
}

export const mapSkillsIntoCategories = (skills: SkillMastery[], categories: SkillCategory[]) => {
  const categoriesMap = mapCategories(categories)

  const skillCategories = skills.reduce((acc, cur) => {
    const { categoryId } = cur
    const category = categoryId ? categoriesMap[categoryId] : null

    const categoryName = category?.parent ? category.parent.name : category?.name || 'Other'

    if (!acc[categoryName]) {
      acc[categoryName] = []
    }

    acc[categoryName].push(cur)

    return acc
  }, prepareCategories(categories))

  const skillCategoriesDetails = skills.reduce((acc, cur) => {
    const { categoryId } = cur
    const category = categoryId ? categoriesMap[categoryId] : null
    const categoryName = category?.name

    if (categoryName && acc[categoryName]) {
      acc[categoryName].push(cur)
    }

    return acc
  }, prepareCategories(categories))

  return { skillCategories, skillCategoriesDetails }
}

import { Skill } from 'cv-graphql'
import { createTable } from '@templates/table'
import { SkillsTableRow } from '@organisms/skills-table-row'
import { SkillsTableTool } from '@organisms/skills-table-tool'
import { SkillsTableHead } from '@organisms/skills-table-head'
import { useSkills } from 'hooks/use-skills'

const Table = createTable<Skill>()

const Skills = () => {
  const { skills, loading } = useSkills()

  return (
    <Table
      items={skills}
      loading={loading}
      TableToolComponent={SkillsTableTool}
      TableHeadComponent={SkillsTableHead}
      TableRowComponent={SkillsTableRow}
      searchBy={['name', 'category_parent_name', 'category_name']}
      defaultSortBy="category_parent_name"
    />
  )
}

export default Skills

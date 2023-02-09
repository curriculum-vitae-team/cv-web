import { useQuery } from '@apollo/client'
import { createTable } from '../../templates/table'
import { ILanguage } from '../../../interfaces/language.interface'
import { LanguagesResult } from '../../../graphql/languages/languages.types'
import { LANGUAGES } from '../../../graphql/languages'
import { LanguagesTableTool } from '../../organisms/languages-table-tool'
import { LanguagesTableHead } from '../../organisms/languages-table-head'
import { LanguagesTableRow } from '../../organisms/languages-table-row'

const Table = createTable<ILanguage>()

const Languages = () => {
  const { data, loading } = useQuery<LanguagesResult>(LANGUAGES)

  return (
    <div>
      <Table
        items={data?.languages || []}
        loading={loading}
        TableToolComponent={LanguagesTableTool}
        TableHeadComponent={LanguagesTableHead}
        TableRowComponent={LanguagesTableRow}
        searchBy={['name', 'native_name', 'iso2']}
        defaultSortBy="name"
      />
    </div>
  )
}

export default Languages

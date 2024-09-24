import { getDataSource } from "@/@server/datasource";

export const getDictionaries = async (dictionaryType: string) => {
    const appDataSource = await getDataSource();
    const dictionaries = await appDataSource.manager.query(
        `
            SELECT id, title FROM t_common_dictionaries 
            WHERE dictionary_type = ? AND STATUS = 'enable' 
            ORDER BY id
        `,
        [dictionaryType]
    );
    return dictionaries;
};

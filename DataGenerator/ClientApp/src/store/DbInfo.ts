import { Action, Reducer } from 'redux';


export interface DbInfoState {
    dataSource: string;
    dbName: string;
}


export const connectionStringCreator = {
    Create: (info: DbInfoState) => (info.dataSource+info.dbName)
};

class DbInfo {

}
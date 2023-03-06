import axios from "axios";
import { IPendWithInstallResponse, TableFilter } from "./table.model";

const getPendWithoutInstallDataList = (
  pageNumber: number,
  pageSize: number,
  reqObj: TableFilter
): Promise<IPendWithInstallResponse> => {
  const url = `https://leadmanagementservice.intoxalockdev.com/api/AgentLead/SupervisorLeads?supervisorUserName=AnkurTestSupervisor&statusCode=512&pageNumber=${pageNumber}&pageSize=${pageSize}`;
  return axios.post(url, reqObj);
};

const tablesService = { getPendWithoutInstallDataList };

export default tablesService;

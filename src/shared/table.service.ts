import axios from "axios";

const getPendWithoutInstallDataList = () => {
  return axios.get(
    "/AgentLead/GetSupervisorLeads?supervisorUserName=AnkurTestSupervisor&statusCode=512"
  );
};

const tablesService = { getPendWithoutInstallDataList };

export default tablesService;

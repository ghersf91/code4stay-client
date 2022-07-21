import axios from 'axios'

class ProjectService {

    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/projects`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })
    }

    getProjects() {
        return this.api.get('/getAllProjects')
    }

    getOneProject(project_id) {
        return this.api.get(`getOneProject/${project_id}`)
    }

    createProject(projectData) {
        return this.api.post('/create', projectData)
    }

    editProject(project_id, projectData) {
        return this.api.post(`/edit/${project_id}`, projectData)

    }

    deleteProject(project_id) {
        return this.api.post(`/delete/${project_id}`)
    }
}

const projectsService = new ProjectService()

export default projectsService
import { useEffect, useState } from "react"
import { Card, Col, Row, Container } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Loader from "../../Components/Loader/Loader"
import JoinButton from "../../Components/JoinProjectButton/JoinProjectButton"
import projectsService from "../../Services/project.services"
import RatingWidget from "../../Components/RatingWidget/RatingWidget"
import './ProjectDetails.css'


const ProjectDetailsPage = () => {

    const { project_id } = useParams()
    const [project, setProject] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        loadProject()
    }, [])

    const loadProject = () => {
        projectsService
            .getOneProject(project_id)
            .then(({ data }) => {
                setProject(data)
                setIsLoading(false)
            })
            .catch(err => setIsLoading(false))
    }

    return (

        <article className="id-card">
            {
                isLoading ?
                    <Loader /> :
                    <Container className='mb-5'>
                        <Row>
                            <Col className="sm-12 md-6">
                                <Card className='projectDetails'>
                                    <Card.Img variant="top" src={project.gallery[0]} />
                                    <Card.Body>
                                        <Card.Title>{project.projectName}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">Site: {project.city}, {project.country}</Card.Subtitle>
                                        <Card.Text>
                                            {project.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="sm-12 md-6">
                                <RatingWidget testimonials={project.testimonials} _id={project_id} />
                            </Col>
                        </Row>
                        <JoinButton project_id={project_id} />
                    </Container >
            }
        </article>
    )
}
export default ProjectDetailsPage

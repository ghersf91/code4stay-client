import { Row, Col, Form } from 'react-bootstrap'
import { useState } from "react"
import ProjectCard from "../ProjectsCard/ProjectsCard"
import SearchBar from '../SearchBar/SearchBar'

const ProjectsList = ({ projects }) => {

    const [query, setQuery] = useState('')
    const [continents, setContinents] = useState([])


    const receiveContinents = data => {
        setContinents(data)
    }


    return (

        <>
            <Form>
                <SearchBar receiveContinents={receiveContinents} />

                <Row>
                    {
                        continents && continents.length > 0
                            ?

                            // continents.filter(post => {
                            //     console.log(continents)
                            //     if (query === "") {
                            //         return post;
                            //     } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                            //         return post;
                            //     }
                            // })
                            continents.map(project => {
                                return (
                                    <Col md={3} key={project._id} >
                                        <ProjectCard {...project} />
                                    </Col>
                                )
                            })


                            :

                            // projects.filter(post => {
                            //     console.log(continents)
                            //     if (query === "") {
                            //         return post;
                            //     } else if (post.projectName.toLowerCase().includes(query.toLowerCase())) {
                            //         return post;
                            //     }
                            // })
                            projects.map(project => {
                                return (
                                    <Col md={3} key={project._id} >
                                        <ProjectCard {...project} />
                                    </Col>
                                )
                            })

                    }
                </Row>
            </Form>


        </>

    )
}


export default ProjectsList
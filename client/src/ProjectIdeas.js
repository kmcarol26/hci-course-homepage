import {Component} from "react";
import React from "react";
import ExpandText from 'react-expand-text';
import Collapsible from 'react-collapsible';


class ProjectName extends Component {
    render() {
        return (
            <h4>{this.props.projectName}</h4>
        );
    }
}

class ProjectDesc extends Component {
    render() {
        return (
            <div align="justify">
            <p align="left">  {this.props.text} </p>
            </div>


        )
    }
}

class ProjectTech extends Component {
    render(){
        return(
            <p> {this.props.text}</p>
        )
    }
}


class UISketch extends Component {
    render(){
        return(
            <img src={this.props.path}></img>
        )
    }
}



class ProjectIdeas extends Component {
    // static contextTypes = {
    //     router: PropTypes.object
    // }
    // redirectToTarget = () => {
    //     this.context.router.history.push(`/target`)
    // }

    render() {
        const project1_name = "Apartment Maintenance App";
        const proj1_p1 = "Build an app which can track apartment maintenance issues and emergencies. Tenants can request service through the app and track the status of their complaint. Maintenance technicians receive complaints on the app, go through the type of issue and be prepared before hand and can update the status visible to the tenant. Landlords can use the app to oversee the workflow and take necessary action, if required."
        const proj1_p2="The system will comprise of login modules, a dashboard for tenants, maintenance team and landlord. The user interface should be simple and intuitive for the user.The objective of the project is to develop a system which streamlines the workflow of maintenance issues in a way that is easy to use by all the users.";
        const proj1_existing_systems_p1 = "Could not find a dedicated mobile app for apartment maintenance but apartments use property management web applications which include workflow tracking for maintenance issues. I analyzed OneSite Property Management software used for my apartment. There’s just one account for all the tenants in the apartment. While submitting a service request, after the issue category is selected, the location options prompted are not relevant to the category. For example after selecting Plumbing and bath category, all locations including bedroom, hallway which are irrelevant to the issue category selected are displayed. ";
        const proj1_existing_systems_p2 = "Problems like pest-control for bed bugs , mice, ticks etc are not listed at all. There is a textbox for entry notes but no form element to select preferred entry time for the maintenance personnel to provide the service. There’s no way of entering an alternate phone number in case the tenant who lodged the complaint is not available at the time of the technician’s visit."
        const proj1_technologies = "Android SDK"
        const proj1_adv_p1 = "•\tSave Time and Effort: A lot of apartments rely on long automated phone calls. The tenant has to leave a voicemail describing the issue and his/her address. When the on-call technicians receive the voice message, they call back, confirm the address and schedule a tentative time to provide their service. An app can instead cut reduce the time involved in this entire process. A good user interface can make it easier for the tenant to log requests quickly, track the technician’s visit and check the status on the app. The technicians can view the address and issue on their app and avoid making phone calls to the tenant.";
        const proj1_adv_p2 = "•\tPrioritize Maintenance issues: The app will list the emergency issues such as a lockout, broken window, clogged toilet, etc separately in the maintenance crew’s dashboard so that they prioritize their visits.";
        const proj1_adv_p3 = "•\tHelps technicians to be prepared: A good system will present technicians with all the information they need to be prepared before their service.";
        const proj1_adv_p4 = "•\tTransparency: All tenants of the apartment, technicians and landlord can view the details of complaints on their app.";

        const project2_name = "TA Office Hours Management";
        const proj2_p1 = "TA office hours are informal sessions where there can be an unexpected number of incoming students. A long queue of students can be overwhelming for a single TA and frustrating for students as well. The idea behind this application is to make the process better. ";
        const proj2_p2 = "Students sign up for TA hours on the application before the sessions begin.  TAs can have an estimate of how many students will turn up and if needed, take the help of another TA or extend the hours or organize another session.  The application can assign fixed time slots to the each student so that others do not wait too long. While signing up for a session, students can also give a brief description of the question/problem they need help with so that TAs can be better prepared. This application will also help Professors understand the number of TAs they need for the course. A greater number of students visiting the TA for help in a particular topic can help Professors understand the topics that students are struggling with the most.";
        const proj2_p3 = "The system will have an interface each for student, TA and the professor. The system should be able to prompt the student with relevant problem areas while signing up. A key challenge would be scheduling the students especially when all time slots are filled. Feedback from students after each session can help TAs in subsequent sessions.";

        const proj2_existing_systems_p1 = "Currently time, location and the name of the TA for office hours are posted on Blackboard. Students just walk in at anytime and wait for others who were before them to get them questions cleared. Some students take up a lot of time due to which others need to wait longer. If the TA is unable to help all students within the allotted hours, the TA spends extra time(unplanned) with the students.";
        const proj2_existing_systems_p2 = "I could not find a web application for TA office hours scheduling online. They might be used by other educational institutions but may be private applications not intended for public use.";
        const proj2_technologies = "Front end: ReactJS\n" +
            "Backend: NodeJS\n" +
            "Database: MongoDB\n";
        const proj2_adv_p1 = "•\tThe applications schedules students into time slots. This helps TAs attend to the students in an orderly manner.";
        const proj2_adv_p2 = "•\tStudents dont have to spend extra time waiting for others to get their problems solved. They just need to be present for the time slot allotted to them.";
        const proj2_adv_p3 = "•\tTAs can be better prepared for questions by going through the reason for a student’s visit before the TA session starts.";
        const proj2_adv_p4 = "•\tProfessors can assign more TAs for a particular session or request extra sessions if number of students who signed up are greater than usual.";
        const proj2_adv_p5 = "•\tProfessors can understand which topics from the course are more challenging for students and take necessary steps to help students.";
        const proj2_adv_p6 = "•\tFeedback from students after every session can help TAs and professors.";

        const project3_name = "Student Tutoring Service";
        const proj3_p1 = "Build a web application which is a medium for university students seeking fellow students who are willing to tutor them for a minimal fee or for services in exchange. A student who wants to tutor can register as a tutor for specific courses/subjects . Students looking for tutors can sign up as students and search for tutors and connect with them on the basis of the ratings they’ve received. This is a peer-to-peer knowledge sharing website only to be used within the university.\n";
        const proj3_p2= "The UI components required to build are the registration pages for tutors and students, a page for students to search for tutors of their interest, tutor profiles which include their bio,ratings and reviews from other students,etc.\n";

        const proj3_existing_systems_p1 = "There are a number of applications  connecting tutors and students but not within the university level. A popular app is ‘Whiz’ which allows users to search for tutors based on the location and subject. The proposed application however caters to university students specifically.  ";
        const proj3_technologies = "Front end: ReactJS\n" +
            "Backend: NodeJS\n" +
            "Database: MongoDB\n";
        const proj3_adv_p1 = "•\tThe application promotes knowledge sharing among students, allowing them to help out each other.";
        const proj3_adv_p2 = "•\tTutors receive money in exchange.";
        const proj3_adv_p3 = "•\tThe application is a great way to network.";

        return (
            <div height="200px" width="50%">
                <h2>Project ideas</h2>
                <h3>1. Apartment Maintenance App</h3>
                <div>
                <Collapsible trigger="Click to read more about Apartment Maintenance App" triggerWhenOpen="Click to collapse" >
                    <br/>
                    <p ><font color="red"> Note: Click on each heading to expand or collapse</font></p>

                    <Collapsible trigger="Proposal">
                        <ProjectDesc text={proj1_p1}/>
                        <ProjectDesc text={proj1_p2}/>
                    </Collapsible>

                    <Collapsible trigger="Existing Systems">

                        <ProjectDesc text={proj1_existing_systems_p1}/>
                        <ProjectDesc text={proj1_existing_systems_p2}/>
                    </Collapsible>

                    <Collapsible trigger="Proposed Technologies">
                        <ProjectTech text={proj1_technologies}/>
                    </Collapsible>
                    <Collapsible trigger="Advantages of proposed system">
                        <ProjectTech text={proj1_adv_p1}/>
                        <ProjectTech text={proj1_adv_p2}/>
                        <ProjectTech text={proj1_adv_p3}/>
                        <ProjectTech text={proj1_adv_p4}/>
                    </Collapsible>
                    <Collapsible trigger="See UI Sketches">
                        <div class="row">
                            <div class="column">

                                <img src={window.location.origin + '/Apartment-1.jpeg'} width="400" height="500"></img>
                            </div>


                            <div class="column">
                                <img src={window.location.origin + '/Apartment-2.jpeg'} width="400" height="500"></img>
                            </div>
                        </div>

                    </Collapsible>
                </Collapsible>
                </div>
                <br/>
                <div>
                    <h3>2. {project2_name}</h3>
                    <Collapsible trigger="Click to read more about TA Office Hours Management" triggerWhenOpen="Click to collapse" >

                    <br/>
                        <p ><font color="red"> Note: Click on each heading to expand or collapse</font></p>

                        <Collapsible trigger="Proposal">
                        <ProjectDesc text={proj2_p1}/>
                        <ProjectDesc text={proj2_p2}/>
                        <ProjectDesc text={proj2_p3}/>
                    </Collapsible>

                    <Collapsible trigger="Existing Systems">

                        <ProjectDesc text={proj2_existing_systems_p1}/>
                        <ProjectDesc text={proj2_existing_systems_p2}/>
                    </Collapsible>

                    <Collapsible trigger="Proposed Technologies">
                        <ProjectTech text={proj2_technologies}/>
                    </Collapsible>
                    <Collapsible trigger="Advantages of proposed system">
                        <ProjectDesc text={proj2_adv_p1}/>
                        <ProjectDesc text={proj2_adv_p2}/>
                        <ProjectDesc text={proj2_adv_p3}/>
                        <ProjectDesc text={proj2_adv_p4}/>
                        <ProjectDesc text={proj2_adv_p5}/>
                        <ProjectDesc text={proj2_adv_p6}/>
                    </Collapsible>
                </Collapsible>
                    <br/>
                    <Collapsible trigger="See UI Sketches">
                        <div class="row">
                            <div class="column">

                        <img src={window.location.origin + '/TA-1.jpeg'} width="400" height="500"></img>
                            </div>


                            <div class="column">
                        <img src={window.location.origin + '/TA-2.jpeg'} width="400" height="500"></img>
                            </div>
                        </div>

                    </Collapsible>
            </div>
                <br/>

                <dev>
                    <h3>3. {project3_name}</h3>
                    <Collapsible trigger="Click to read more about Student Tutoring Service" triggerWhenOpen="Click to collapse" >
                    <br/>
                        <p ><font color="red"> Note: Click on each heading to expand or collapse</font></p>

                        <Collapsible trigger="Proposal">
                        <ProjectDesc text={proj3_p1}/>
                        <ProjectDesc text={proj3_p2}/>
                    </Collapsible>

                    <Collapsible trigger="Existing Systems">

                        <ProjectDesc text={proj3_existing_systems_p1}/>
                    </Collapsible>

                    <Collapsible trigger="Proposed Technologies">
                        <ProjectTech text={proj3_technologies}/>
                    </Collapsible>
                    <Collapsible trigger="Advantages of proposed system">
                        <div  >
                        <ProjectTech text={proj3_adv_p1}/>
                        <ProjectTech text={proj3_adv_p2}/>
                        <ProjectTech text={proj3_adv_p3}/>
                        </div>
                    </Collapsible>
                        <Collapsible trigger="See UI Sketches">
                            <div class="row">

                            <img src={window.location.origin + '/tutor-1.jpeg'} width="400" height="500"></img>


                            </div>

                        </Collapsible>
                </Collapsible>
                </dev>
                <br/>



            </div>

        )
    }

}

export default ProjectIdeas;
import {Component} from "react";
import React from "react";


class ProjectName extends Component {
    render() {
        return (
            <h4>{this.props.projectName}</h4>
        );
    }
}
class ProjectDesc extends Component {
    render(){
        return(
            <p align="left"> {this.props.text}</p>
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

class ProjectIdeas extends Component{
    // static contextTypes = {
    //     router: PropTypes.object
    // }
    // redirectToTarget = () => {
    //     this.context.router.history.push(`/target`)
    // }

    render () {
        const project1_name="Apartment Maintenance App";
        const proj1_p1 = "Build a web application which is a medium for university students seeking fellow students who are willing to tutor them for a minimal fee or for services in exchange. A student who wants to tutor can register as a tutor for specific courses/subjects . Studen¬¬¬¬¬¬ts looking for tutors can sign up as students and search for tutors and connect with them on the basis of the ratings they’ve received. This is a peer-to-peer knowledge sharing website only to be used within the university."
        const proj1_p2="The UI components required to build are the registration pages for tutors and students, a page for students to search for tutors of their interest, tutor profiles which include their bio,ratings and reviews from other students,etc.";
        const proj1_existing_systems_p1 = "Could not find a dedicated mobile app for apartment maintenance but apartments use property management web applications which include workflow tracking for maintenance issues. I analyzed OneSite Property Management software used for my apartment. There’s just one account for all the tenants in the apartment. While submitting a service request, after the issue category is selected, the location options prompted are not relevant to the category. For example after selecting Plumbing and bath category, all locations including bedroom, hallway which are irrelevant to the issue category selected are displayed. ";
        const proj1_existing_systems_p2 = "Problems like pest-control for bed bugs , mice, ticks etc are not listed at all. There is a textbox for entry notes but no form element to select preferred entry time for the maintenance personnel to provide the service. There’s no way of entering an alternate phone number in case the tenant who lodged the complaint is not available at the time of the technician’s visit."
        const proj1_technologies=  "Android SDK"
        const proj1_adv_p1 = "•\tSave Time and Effort: A lot of apartments rely on long automated phone calls. The tenant has to leave a voicemail describing the issue and his/her address. When the on-call technicians receive the voice message, they call back, confirm the address and schedule a tentative time to provide their service. An app can instead cut reduce the time involved in this entire process. A good user interface can make it easier for the tenant to log requests quickly, track the technician’s visit and check the status on the app. The technicians can view the address and issue on their app and avoid making phone calls to the tenant.";
        const proj1_adv_p2 = "•\tPrioritize Maintenance issues: The app will list the emergency issues such as a lockout, broken window, clogged toilet, etc separately in the maintenance crew’s dashboard so that they prioritize their visits.";
        const proj1_adv_p3 = "•\tHelps technicians to be prepared: A good system will present technicians with all the information they need to be prepared before their service.";
        const proj1_adv_p4 = "•\tTransparency: All tenants of the apartment, technicians and landlord can view the details of complaints on their app.";

        const project_name2="TA Office Hours Management";
        const project_name3="Student Tutoring Service";
        return (
            <div>
                <h2>Project ideas</h2>
                <ProjectName projectName={project1_name}/>
                <h3>Proposal</h3>

                <ProjectDesc text = {proj1_p1}/>
                <ProjectDesc text = {proj1_p2}/>
                <h3>Existing Systems</h3>
                <ProjectDesc text = {proj1_existing_systems_p1}/>
                <ProjectDesc text = {proj1_existing_systems_p2}/>
                <h3>Proposed Technologies</h3>
                <ProjectTech text = {proj1_technologies}/>
                <h3>Advantages of proposed system</h3>
                <ProjectDesc text = {proj1_adv_p1}/>
                <ProjectDesc text = {proj1_adv_p2}/>
                <ProjectDesc text = {proj1_adv_p3}/>
                <ProjectDesc text = {proj1_adv_p4}/>





            </div>

        )
    }

}
export default ProjectIdeas;
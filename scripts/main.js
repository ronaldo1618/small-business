import api from "./apiManager.js"
import dom from "./renderDOM.js"

const displayEmployees = () => {
    api.getData()
    .then(employees => {
        dom.render(employees)
    })
}
displayEmployees()
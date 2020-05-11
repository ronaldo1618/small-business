import make from "./makeHTMLComp.js"

const dom = {
    render(employees) {
        employees.forEach(employee => {
            document.querySelector("#employees").innerHTML += make.component(employee)
        });
    }
}

export default dom;
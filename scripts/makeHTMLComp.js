const make = {
    component(employee) {
        return `
            <article class="employee">
                <header class="employee__name">
                    <h1>${employee.name}</h1>
                </header>
                <section class="employee__department">
                    Works in the ${employee.department.depName} department
                </section>
                <section class="employee__computer">
                    Currently using a ${employee.computer.type}
                </section>
            </article>
        `
    }
}

export default make;
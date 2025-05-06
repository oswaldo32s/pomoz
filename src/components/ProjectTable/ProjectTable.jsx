export default function ProjectTable() {
    const projects = [
        {
            Project: 'Productivity App',
            'Progress %': 0.1,
            Status: 'In Progress',
            'Priority Level': 'High',
            Deadline: 'No se'
        },
        {
            Project: 'Weather App',
            'Progress %': 0.0,
            Status: 'Not Started',
            'Priority Level': 'Medium',
            Deadline: 'No se'
        },
        {
            Project: 'Another App',
            'Progress %': 0.0,
            Status: 'Not Started',
            'Priority Level': 'Low',
            Deadline: 'No se'
        }
    ]
    const headers = Object.entries(projects[0]).map(([key, value]) => key)

    return (
        <table>
            <thead>
                <tr>
                    {
                        headers.map((title, i)=> {
                            return (<th key={i}>{title}</th>)
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    projects.map((project, i) => {
                        return (
                            <tr key={i}>
                                {
                                    Object.entries(project).map(([key, value], i) => {
                                        return (
                                            <td key={i}>
                                                {value}
                                            </td>
                                        )
                                    })
                                }
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}
export function BusinessCard({prop}) {

    return <div>
        <h2>{prop.name}</h2>
        <p>{prop.description}</p>
        <h3>Interests</h3>
        <ul>
            {prop.interests.map((value) => {
                return <li>{value}</li>
            })}
        </ul>
        <button>LinkedIn
            <a href={prop.linkedIn}></a>
        </button>
        <button>Twitter 
            <a href={prop.twitter}></a>
        </button>
    </div>
}
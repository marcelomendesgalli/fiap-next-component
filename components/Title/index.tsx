import './styles.css';

interface Props {
    value: string
}

const Title = (props)=> {
    return (
            <h2 className="title">
                {props.value}</h2>
    )
}

export default Title;
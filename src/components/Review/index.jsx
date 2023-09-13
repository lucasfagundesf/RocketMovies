import { Container } from './styles';
import { Tag } from '../Tag';

export function Review({ data, ...rest}) {
    return(
        <Container {...rest}>
            <h1>{data.title}</h1>
            <div className='rate'>
                {data.rate}
            </div>
            <p>{data.text}</p>
            {
                data.tags &&
                <footer>
                    {
                        data.tags.map(tag =>
                            <Tag 
                                key={tag.id}
                                title={tag.name}
                            />)
                    }
                </footer>
            }
        </Container>
    )
}
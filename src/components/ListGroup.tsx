import { ListGroup } from 'flowbite-react';

export default function ListGroupWithLinks() {
    return (
        <ListGroup>
            <ListGroup.Item
                active
                href="/list-group"
            >
                <p>
                    Profile
                </p>
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
                Settings
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
                Messages
            </ListGroup.Item>
            <ListGroup.Item href="/list-group">
                Download
            </ListGroup.Item>
        </ListGroup>
    )
}

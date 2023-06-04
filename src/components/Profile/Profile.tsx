import React from 'react';
import {S} from './Profile_styles'

export class Profile extends React.Component {
    render() {
        return (
            <S.Content className='content'>Main content
                <div>
                    <img
                        src="https://media.istockphoto.com/id/976370312/photo/content-marketing-content-data-blogging-media-publication-information-vision-concept.jpg?s=612x612&w=0&k=20&c=93V95QsK40hmisFJuCj35GNLJKwB6Z4uuQ7ttLiVbHA="
                        alt="content"/>
                </div>
            </S.Content>
        );
    }
}


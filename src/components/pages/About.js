import React, {Component} from 'react';
import Header from '../common/Header';
import image from '../assets/image/about.jpg'
import Timeline from '../common/Timeline';

class About extends Component {
    render() {
        return (
            <div>
                <Header 
                    title='About Us'
                    subtitle="IT'S REALLY A GREAT STORY"
                    showButton={false}
                    image={image}
                />
                <Timeline />
            </div>
        )
    }
}

export default About;
import React, {Component} from 'react';

import './App.css';
import Customer from './components/Customer';

const customers = [
    {
        'id': 1,
        'image': 'https://placeimg.com/64/64/3',
        'name': '이병훈',
        'gender': '남자',
        'birthday': '930104',
        'job': '대학생'
    }, {
        'id': 2,
        'image': 'https://placeimg.com/64/64/1',
        'name': '김병훈',
        'gender': '남자',
        'birthday': '930104',
        'job': '프로그래머'
    }, {
        'id': 3,
        'image': 'https://placeimg.com/64/64/2',
        'name': '홍길동',
        'gender': '남자',
        'birthday': '930104',
        'job': '학생'
    }

]

class App extends Component {
    render() {
        return (
            <div>
                {customers.map(c => {
                    return <Customer
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        image={c.image}
                        gender={c.gender}
                        job={c.job}
                        birthday={c.birthday}/>
                })}
            </div>
        );
    }
}

export default App;

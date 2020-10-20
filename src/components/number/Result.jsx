import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../loading/Loading';

function Result() {
    const loading = useSelector(state => state.loading)
    const answer = useSelector(state => state.number)
    return (
        <>  
            {loading && <Loading />}
            {
                answer.error ? <div className="ui card">
                    <div className="content">
                        <div className="description">
                            <p style={{color:'red'}}>{answer.error}</p>
                        </div>
                    </div>
                </div> :
                    answer.data ?
                    <div className="ui card">
                        <div className="content">
                            <div className="description">
                                <p>{answer.data}</p>
                            </div>
                        </div>
                    </div> : ''
            }

        </>
    )
}

export default Result

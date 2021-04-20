import React, { useEffect } from 'react';

import WebTechStack from '../../../../utils/webTechStack';
import MobileTechStack from '../../../../utils/mobileTechStack';
import DeploymentTechStack from '../../../../utils/deploymentTechStack';

import './index.sass';

const TestTab = () => {

    useEffect(() => {
        const slide = document.getElementById('slide-container');
        const tabs = document.querySelectorAll('.tab');
        const tab1 = document.getElementById('tab1');
        const tab2 = document.getElementById('tab2');
        const tab3 = document.getElementById('tab3');

        function moveToFirst() {
            slide.classList = 'move-to-first';
            tabs.forEach((tile) => {
                tile.classList.remove('selected');
            });
            tab1.classList.add('tab', 'selected');
        }

        function moveToSecond() {
            slide.classList = 'move-to-second';
            tabs.forEach((tile) => {
                tile.classList.remove('selected');
            });
            tab2.classList.add('tab', 'selected');
        }

        function moveToThird() {
            slide.classList = 'move-to-third';
            tabs.forEach((tile) => {
                tile.classList.remove('selected');
            });
            tab3.classList.add('tab', 'selected');
        }

        tab1.addEventListener('click', moveToFirst);
        tab2.addEventListener('click', moveToSecond);
        tab3.addEventListener('click', moveToThird);
        return () => {
            window.removeEventListener("click", moveToFirst)
            window.removeEventListener("click", moveToSecond)
            window.removeEventListener("click", moveToThird)
        };

    }, []);
    return (
        <div className='container' style={{ overflow: 'hidden' }}>
            <div className='header-group'>
                <div id="tab1" className="tab selected">
                    WEB
                </div>
                <div id="tab2" className="tab">
                    MOBILE
                </div>
                <div id="tab3" className="tab">
                    DEPLOYMENT
                </div>

            </div>

            <div id='slide-container'>
                <div class='first'>
                    <div className="row">
                        {WebTechStack.map((tech) => (
                            <div className='col-lg-2 col-md-4 col-sm-6 col-xs-6' key={tech.name}>
                                <img src={tech.url} className='tech-stack-img' alt={tech.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div class='second'>
                    <div className="row">
                        {MobileTechStack.map((tech) => (
                            <div className='col-lg-2 col-md-4 col-sm-6 col-xs-6' key={tech.name}>
                                <img src={tech.url} className='tech-stack-img' alt={tech.name} />
                            </div>
                        ))}
                    </div>
                </div>
                <div class='third'>
                    <div className="row">
                        {DeploymentTechStack.map((tech) => (
                            <div className='col-lg-2 col-md-4 col-sm-6 col-xs-6' key={tech.name}>
                                <img src={tech.url} className='tech-stack-img' alt={tech.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestTab;

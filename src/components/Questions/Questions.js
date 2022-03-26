import React from 'react';

const Questions = () => {
    return (
        <div class="accordion w-50 mt-5 pb-5 mx-auto" id="accordionExample">
            <h2 className="text-center mb-3">Questions</h2>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        How react works?
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>
                            React is a JavaScript library. React essentially maintains a tree at its core. This tree is able to do efficient diff computations on the nodes. Consider HTML code to be a tree. In fact, the browser treats DOM in this manner. React allows a browser to effectively re-construct the DOM in JavaScript and only push the changes that have actually happened to the DOM.
                        </p>
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Difference Between Props and State...
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <ul>
                            <li>
                                Props are used to pass data from one component to other. And in case of state data is passed within the component only.
                            </li>
                            <li>
                                Props are immutable. So they are ready-only. But state is mutable, so it can both read and write.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Questions;
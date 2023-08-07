import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './home.css'

function First() {
    return React.createElement('section', { className: 'pricing py-5' },
        React.createElement('div', { className: 'container' },
            React.createElement('div', { className: 'row' },
                React.createElement('div', { className: 'col-lg-4' },
                    React.createElement('div', { className: 'card mb-5 mb-lg-0' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, "Free"),
                            React.createElement('h6', { className: 'card-price text-center' }, "$0",
                                React.createElement('span', { className: 'period' }, "month")),
                            React.createElement('hr'),
                            React.createElement('ul', { className: 'fa-ul' },
                                React.createElement('li', null, "Single User", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "5GB Storage", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Unlimited Public Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Community Access", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', { className: 'text-muted' }, "Unlimited Private Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' }))),
                                React.createElement('li', { className: 'text-muted' }, "Dedicated Phone Support", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' }))),
                                React.createElement('li', { className: 'text-muted' }, "Free Subdomain", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' }))),
                                React.createElement('li', { className: 'text-muted' }, "Monthly Status Reports", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' }))),
                            ),
                            React.createElement('div', { className: 'd-grid' }, React.createElement('a', { className: 'btn btn-primary text-uppercase' }, "BUTTON"))))),



                React.createElement('div', { className: 'col-lg-4' },
                    React.createElement('div', { className: 'card mb-5 mb-lg-0' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, "Plus"),
                            React.createElement('h6', { className: 'card-price text-center' }, "$9",
                                React.createElement('span', { className: 'period' }, "month")),
                            React.createElement('hr'),
                            React.createElement('ul', { className: 'fa-ul' },
                                React.createElement('li', null, "Single User", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "50 GB Storage", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Unlimited Public Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Community Access", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Unlimited Private Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Dedicated Phone Support", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Free Subdomain", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', { className: 'text-muted' }, "Monthly Status Reports", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-times' }))),
                            ),
                            React.createElement('div', { className: 'd-grid' }, React.createElement('a', { className: 'btn btn-primary text-uppercase' }, "BUTTON"))))),

                React.createElement('div', { className: 'col-lg-4' },
                    React.createElement('div', { className: 'card mb-5 mb-lg-0' },
                        React.createElement('div', { className: 'card-body' },
                            React.createElement('h5', { className: 'card-title text-muted text-uppercase text-center' }, "Pro"),
                            React.createElement('h6', { className: 'card-price text-center' }, "$49",
                                React.createElement('span', { className: 'period' }, "month")),
                            React.createElement('hr'),
                            React.createElement('ul', { className: 'fa-ul' },
                                React.createElement('li', null, "Single User", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "5GB Storage", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Unlimited Public Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Community Access", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Unlimited Private Projects", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Dedicated Phone Support", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, React.createElement('strong', null, "Unlimited"), " Free Subdomains", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                                React.createElement('li', null, "Monthly Status Reports", React.createElement('span', { className: 'fa-li' }, React.createElement('i', { className: 'fas fa-check' }))),
                            ),
                            React.createElement('div', { className: 'd-grid' }, React.createElement('a', { className: 'btn btn-primary text-uppercase' }, "BUTTON")))))
            )))
}

export default First
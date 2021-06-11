/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is progressive rendering?',
    content:
      'Progressive rendering is the name given to techniques used to improve the performance of a webpage (in particular, improve perceived load time) to render content for display as quickly as possible.It used to be much more prevalent in the days before broadband internet but it is still used in modern development as mobile data connections are becoming increasingly popular (and unreliable)!',
  },
  {
    title: 'Have you used different HTML templating languages before?',
    content:
      'Yes, Pug (formerly Jade), ERB, Slim, Handlebars, Jinja, Liquid, and EJS just to name a few. In my opinion, they are more or less the same and provide similar functionality of escaping content and helpful filters for manipulating the data to be displayed. Most templating engines will also allow you to inject your own filters in the event you need custom processing before display.',
  },
  {
    title: 'Describe the difference between <script>, <script async>.',
    content:
      '<script> - HTML parsing is blocked, the script is fetched and executed immediately, HTML parsing resumes after the script is executed. <script async> - The script will be fetched in parallel to HTML parsing and executed as soon as it is available (potentially before HTML parsing completes). Use async when the script is independent of any other scripts on the page, for example, analytics.',
  },
];

export default () => {
  return (
    <div>
      {/*      <Accordion items={items} />*/}
      <Search />
    </div>
  );
};

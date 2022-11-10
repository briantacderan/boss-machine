import { createRoot } from 'react-dom/client';
import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, Routes, HashRouter } from 'react-router-dom';
import axios from 'axios';

import store from './store/index';

import { setMinions } from './store/minions';
import { setSelectedMinion } from './store/selectedMinion';
import { setIdeas } from './store/ideas';
import { setSelectedIdea } from './store/selectedIdea';
import { setWork } from './store/work';
import { setMeetings } from './store/meetings';
import { setIdeaEditing, setMinionEditing, resetEditingState } from './store/appState';

import App from './components/App';
import Heading from './components/Heading';
import AllMinions from './components/AllMinions';
import Home from './components/Home';
import AllIdeas from './components/AllIdeas';
import Idea from './components/Idea';
import Minion from './components/Minion';

const appEnter = nextRouterState => {
  Promise.all([
    axios.get('http://localhost:4001/api/minions'),
    axios.get('http://localhost:4001/api/ideas'),
    axios.get('http://localhost:4001/api/meetings'),
  ])
  .then(([minionsResponse,ideasResponse, meetingsResponse]) => {
    return [minionsResponse.data, ideasResponse.data, meetingsResponse.data];
  })
  .then(([minions, ideas, meetings]) => {
    store.dispatch(setMinions(minions));
    store.dispatch(setIdeas(ideas));
    store.dispatch(setMeetings(meetings));
  })
  .catch(console.error.bind(console));
}

const singleMinionEnter = nextRouterState => {
  store.dispatch(resetEditingState());
  const id = nextRouterState.params.id;
  axios.get(`http://localhost:4001/api/minions/${id}`)
  .then(res => res.data)
  .then(minion => {
    store.dispatch(setSelectedMinion(minion));
  })
  .catch(console.error.bind(console));

  axios.get(`http://localhost:4001/api/minions/${id}/work`)
  .then(res => res.data)
  .then(work => {
    store.dispatch(setWork(work));
  })
  .catch(console.error.bind(console));
}

const singleIdeaEnter = nextRouterState => {
  const id = nextRouterState.params.id;
  axios.get(`http://localhost:4001/api/ideas/${id}`)
  .then(res => res.data)
  .then(idea => {
    store.dispatch(setSelectedIdea(idea));
  })
  .catch(console.error.bind(console));
}

const newIdeaEnter = () => {
  store.dispatch(setIdeaEditing());
  store.dispatch(setSelectedIdea({
      name: 'New Idea',
      description: '',
      weeklyRevenue: 0,
      numWeeks: 0,
    }
  ))
}

const newMinionEnter = () => {
  store.dispatch(setWork([]));
  store.dispatch(setMinionEditing());
  store.dispatch(setSelectedMinion({
      name: '',
      title: '',
      weaknesses: '',
      salary: 0,
    }
  ));
}

const allIdeasEnter = () => {
  store.dispatch(resetEditingState())
}

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Heading />
      <Routes>
        <Route path="/" element={<Home />} onEnter={appEnter} />
        <Route path="/minions" element={<AllMinions />} />
        <Route path="/minions/new" onEnter={newMinionEnter} element={<Minion />} />
        <Route path="/minions/:id" onEnter={singleMinionEnter} element={<Minion />} />
        <Route path="/ideas" onEnter={allIdeasEnter} element={<AllIdeas />} />
        <Route path="/ideas/new" onEnter={newIdeaEnter} element={<Idea />} />
        <Route path="/ideas/:id" onEnter={singleIdeaEnter} element={<Idea />} />
      </Routes>
    </HashRouter>
  </Provider>
);

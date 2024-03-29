1. Important:

React doest not know that state is changing
because hrere we are changing the state with redux where dispatch is responsible which is coming from redux.

so how to link between react and redux

2. Trigger of subscribe method:

whenever their is change in redux store it will trigger the
subscribe method.

3. How React trigger changes/re-renders:

if their is a change throw React.Dispatch

from where this Dispatch will come in React-
it will come from hook state menagement in react like useState, etc.

4. Class:
making one hack b/w react-redux

Redux-->{ subscribe()-----React.Dispatch(useState) }--->React


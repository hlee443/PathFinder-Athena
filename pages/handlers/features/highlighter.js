// Highlighter handlers
// - user action (mouseover)
// - expected behaviour (highlight selected text in a different colour)
// Provide required text prop. This will be the text contained inside the component.
// Highlight the required portion of text by dragging the mouse over it with left-button pressed. The text would be highlighted on button's release
// Optionally, provide a custom class to give your own background color or any other styling.
// Optionally, provide a call back function selectionHandler. An object containing the following will be returned to the function:
//    - selected text
//    - selection start index
//    - selection end index
// example: <SelectionHighlighter text={text} selectionHandler={this.selectionHandler} customClass='custom-class' />

import SelectionHighlighter from 'react-highlight-selection';

export default function handleHighlighter(){
        // Do something with the selection
        console.log(selection);
}
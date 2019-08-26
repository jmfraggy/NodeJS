// Single Thread, Event Loop & Blocking Code
// Node only use a single JS Thread 
// Event Loop - Handle Event Callbacks
// Worker Pool - Do the Heavy Lifting in different Threads, then trigger a Callback to the Event Loop

// Event Loop - keeps the nodejs process running
// Priority Order
// 1. Timers (setTimeout, setInterval Callbacks)
// 2. Pending Callbacks (Execute I/O-related and Callbacks that were deferred)
// 3. Poll (Retrieve new I/O events, execute their callbacks)
// 4. Check - Execute setImmediate() callbacks
// 5. Close Callbacks - Execute all close event callbacks
// Exit 
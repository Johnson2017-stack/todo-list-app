<html>
    <main>
    <link href="./public/style.css" rel="stylesheet" type="text/css" />
    </main>
    <head>
        <title>TODO List APP</title>
    </head>
    <body>
        <Header>
            <h1>TODO List</h1>
            <form id="new-todo-form">
                <input 
                type="text"
                id="new-todo-input"
                placeholder='Your TODO'/>
                <input 
                    type="submit"
                    id="new-todo-submit" 
                    value="Add task "/>
            </form>
        </Header>
        <main>

            <section class="task-list">
            <h2>ToDo</h2>

            <div class="todos">
                <div class="todo">
                    <div class="content">
                        <input 
                            type="text"
                            class="text"
                            value="my new task"
                            readonly
                        />
                    </div>
                    <div class="actions">
                        <button class="edit">Edit</button>
                        <button class="delete">Delete</button>
                    </div>
                </div>
            </div>
            </section>
        </main>
        <script src="./src/views/index.js"/>
    </body>
</html>
import React from 'react'

function Sidebar() {
    return (
        <div>


<aside className="main-sidebar">
    <section className="sidebar" style={{height: 'auto'}}>

      <ul className="sidebar-menu tree" data-widget="tree">
        <li className="header">ЗАДАЧИ</li>
        <li>
          
          <a style={{backgroundColor: '#445566'}} href="http://52.59.81.222/user/problem/1">
            <i className="fa fa-files-o"></i> <span>test</span>
          </a>
        </li>
        
        <li className="header">МЕНЮ</li>
        <li>
          <a href="http://52.59.81.222/user/communication">
            <i className="fa fa-files-o"></i> <span>Комуникация</span>
          </a>
        </li>
        <li>
	        <a target="_blank" href="http://52.59.81.222/docs/en/index.html"><i className="fa fa-book"></i> <span>C++ Документация</span></a>
        </li>
        
        <li> 
        	<h2 id="timer" style={{color: '#b8c7ce', textAlign: 'center'}}>03:56:40</h2> 
        </li>
        
      </ul>
    </section>
    
    <script>

         var msTillEnd = 14220432;
         var msTillSubmit = 0;

	</script> 
    
    <script> 
     var countDownDate = new Date().getTime() + msTillEnd;
     var submitDate = new Date().getTime() + msTillSubmit;
    </script>
    <script src="./js/timer.js.download"></script>
    	
  </aside>


        </div>
    )
}

export default Sidebar

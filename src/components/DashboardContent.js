import React, { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Task from './Task';
import LoadingContent from './LoadingContent';

const DashboardContent = () => {  
  return (
    <div className="content-wrapper">


      <section className="content">
        <div className="row">
          <div className="col-md-6">
          </div>
          <div className="col-md-6">
          </div>
        </div>
        <div className="row">  
          <div className="col-md-8">



          <div class="box box-warning direct-chat direct-chat-warning">
                <div class="box-header with-border">
                  <h3 class="box-title">Въпроси</h3>

                  <div class="box-tools pull-right">
                    <span data-toggle="tooltip" title="3 New Messages" class="badge bg-yellow">3</span>
                    <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-box-tool" data-toggle="tooltip" title="Contacts"
                            data-widget="chat-pane-toggle">
                      <i class="fa fa-comments"></i></button>
                    <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i>
                    </button>
                  </div>
                </div>
          

          
                <div class="box-body">
                  <div class="direct-chat-messages" style={{height: '200px'}}>
                    <div class="direct-chat-msg">
                      <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-left">Вие</span>
                        <span class="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                      </div>
                      <div class="direct-chat-text">
                        Is this template really for free? That's unbelievable!
                        Is this template really for free? That's unbelievable!
                        Is this template really for free? That's unbelievable!
                        Is this template really for free? That's unbelievable!
                        Is this template really for free? That's unbelievable!
                      </div>
                    </div>
                    <div class="direct-chat-msg right">
                      <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-right">Жури</span>
                        <span class="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                      </div>
                      <div class="direct-chat-text">
                        You better believe it!
                      </div>
                    </div>


                    <div class="direct-chat-msg">
                      <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-left">Вие</span>
                        <span class="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                      </div>
                      <span class="direct-chat-img">Вие</span>
                      <div class="direct-chat-text">
                        Working with AdminLTE on a great new app! Wanna join?
                      </div>
                    </div>
                    

                    <div class="direct-chat-msg right">
                      <div class="direct-chat-info clearfix">
                        <span class="direct-chat-name pull-right">Жури</span>
                        <span class="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                      </div>
                      <span class="direct-chat-img">Жури</span>
                      <div class="direct-chat-text">
                        I would love to.
                      </div>
                    </div>



                    </div>














                    </div>





                <div class="box-footer">
                  <form action="#" method="post">
                    <div class="input-group">
                      <input type="text" name="message" placeholder="Type Message ..." class="form-control" />
                      <span class="input-group-btn">
                            <button type="button" class="btn btn-warning btn-flat">Send</button>
                          </span>
                    </div>
                  </form>
                </div>
          
          </div>
          </div>


          <div class="col-md-4">
                  <p class="text-center">
                    <strong>Точки</strong>
                  </p>

                  <div class="progress-group">
                    <span class="progress-text">bills</span>
                    <span class="progress-number"><b>80</b>/100</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-aqua" style={{width: '80%'}}></div>
                    </div>
                  </div>
                  <div class="progress-group">
                    <span class="progress-text">sequence</span>
                    <span class="progress-number"><b>31</b>/100</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-red" style={{width: '31%'}}></div>
                    </div>
                  </div>
                  <div class="progress-group">
                    <span class="progress-text">diff</span>
                    <span class="progress-number"><b>100</b>/100</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-green" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div class="progress-group">
                    <span class="progress-text">общо</span>
                    <span class="progress-number"><b>211</b>/300</span>

                    <div class="progress sm">
                      <div class="progress-bar progress-bar-yellow" style={{width: '80%'}}></div>
                    </div>
                  </div>
                </div>






        </div>
      </section>
    </div>
  )
}

export default DashboardContent

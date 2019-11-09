import React from 'react';


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



            <div className="box box-warning direct-chat direct-chat-warning">
              <div className="box-header with-border">
                <h3 className="box-title">Въпроси</h3>

                <div className="box-tools pull-right">
                  <span data-toggle="tooltip" title="3 New Messages" className="badge bg-yellow">3</span>
                  <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus"></i>
                  </button>
                  <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title="Contacts"
                    data-widget="chat-pane-toggle">
                    <i className="fa fa-comments"></i></button>
                  <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times"></i>
                  </button>
                </div>
              </div>



              <div className="box-body">
                <div className="direct-chat-messages" style={{ height: '200px' }}>
                  <div className="direct-chat-msg">
                    <div className="direct-chat-info clearfix">
                      <span className="direct-chat-name pull-left">Вие</span>
                      <span className="direct-chat-timestamp pull-right">23 Jan 2:00 pm</span>
                    </div>
                    <div className="direct-chat-text">
                      Is this template really for free? That's unbelievable!
                      Is this template really for free? That's unbelievable!
                      Is this template really for free? That's unbelievable!
                      Is this template really for free? That's unbelievable!
                      Is this template really for free? That's unbelievable!
                      </div>
                  </div>
                  <div className="direct-chat-msg right">
                    <div className="direct-chat-info clearfix">
                      <span className="direct-chat-name pull-right">Жури</span>
                      <span className="direct-chat-timestamp pull-left">23 Jan 2:05 pm</span>
                    </div>
                    <div className="direct-chat-text">
                      You better believe it!
                      </div>
                  </div>


                  <div className="direct-chat-msg">
                    <div className="direct-chat-info clearfix">
                      <span className="direct-chat-name pull-left">Вие</span>
                      <span className="direct-chat-timestamp pull-right">23 Jan 5:37 pm</span>
                    </div>
                    <span className="direct-chat-img">Вие</span>
                    <div className="direct-chat-text">
                      Working with AdminLTE on a great new app! Wanna join?
                      </div>
                  </div>


                  <div className="direct-chat-msg right">
                    <div className="direct-chat-info clearfix">
                      <span className="direct-chat-name pull-right">Жури</span>
                      <span className="direct-chat-timestamp pull-left">23 Jan 6:10 pm</span>
                    </div>
                    <span className="direct-chat-img">Жури</span>
                    <div className="direct-chat-text">
                      I would love to.
                      </div>
                  </div>



                </div>














              </div>





              <div className="box-footer">
                <form action="#" method="post">
                  <div className="input-group">
                    <input type="text" name="message" placeholder="Type Message ..." className="form-control" />
                    <span className="input-group-btn">
                      <button type="button" className="btn btn-warning btn-flat">Send</button>
                    </span>
                  </div>
                </form>
              </div>

            </div>
          </div>


          <div className="col-md-4">
            <p className="text-center">
              <strong>Точки</strong>
            </p>

            <div className="progress-group">
              <span className="progress-text">bills</span>
              <span className="progress-number"><b>80</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-aqua" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">sequence</span>
              <span className="progress-number"><b>31</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-red" style={{ width: '31%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">diff</span>
              <span className="progress-number"><b>100</b>/100</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-green" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="progress-group">
              <span className="progress-text">общо</span>
              <span className="progress-number"><b>211</b>/300</span>

              <div className="progress sm">
                <div className="progress-bar progress-bar-yellow" style={{ width: '80%' }}></div>
              </div>
            </div>
          </div>






        </div>
      </section>
    </div>
  )
}

export default DashboardContent

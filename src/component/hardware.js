import React from 'react';

const Hardware = (props)=>{
    return(
        <div className="thm-f thm-sans-light">

        {/*begin header*/}

        <div id="thm-main-action" className="thm-f row w-100 thm-bg7">

            <div className="thm-f col-12 d-flex justify-content-start w-100 thm-sans-medium">

                <div className="thm-f badge save">

                    <img src={props.Save} alt="save" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveAdd}  alt="save add" height="100%"/>

                </div>

                <div className="thm-f badge  mr-2">

                    <img src={props.SaveClose}  alt="save close" height="100%"/>

                </div>

            </div>

        </div>

        {/*end header*/}

        {/*begin content*/}

        <div id="main-content" className="thm-h row">

			{/*begin tab content*/}

			<div id="sub-content" className="thm-h col-12">

				<div id="tab-content" className="thm-h thm-tabs tab-content thm-sans-regular">

					<div id="account" className="thm-h tab-pane fade in active show">

						<div className="thm-h row">

							<div className="thm-h col-2 mr-5 my-2">

								<label for="AAIsActive" className="thm-h thm-sans-bold">ثبت کالا</label>

							</div>						  

						</div>
						
												
						{/*HName*/}
						<div className="thm-h row">

							<div className="thm-h col-md-2 mr-5 my-2">

							  <label for="HName">نام کالا</label>

							</div>

							<div className="thm-h col-md-7 ml-3 my-2 input-group-sm">

							  <input type="text" className="thm-h thm-0radius form-control font-weight-light thm-sans-regular" id="HName"/>

							</div>
						</div>
						<div className="thm-h row my-3">
							<div className="thm-h col-2 mr-5"></div>
							<div className="thm-h col-md-4">
								<div className="thm-h d-block">
									<input id="check-code" type="checkbox" className="thm-h form-check-input" value=""/>
									<label for="check-code" className="thm-h mr-4">بررسی کد اموال در هنگام تخصیص</label>
								</div>
								<div className="thm-h d-block">
									<input id="check-serial" type="checkbox" className="thm-h form-check-input" value=""/> 
								<label for="check-serial" className="thm-h mr-4">بررسی سریال سخت افزاری در هنگام تخصیص</label>
								</div>
								<div className="thm-h d-block">
									<input id="check-attach" type="checkbox" className="thm-h form-check-input" value=""/>
									<label for="check-attach" className="thm-h mr-4">قابلیت اتصال سایر تجهیزات </label>
								</div>
								
								
							</div>
						</div>
							
					</div>					

				</div>

			</div>

			{/*end tab content*/}

		</div>

        {/*end content*/}



        </div>

    )
}

export default Hardware;
export default function CalculatorDisclaimer() {
    return (
      <>
        <div className="bg-[#EA474514] border-l-[6px] border-l-[#EA4745] border border-[#EA474533] backdrop-blur-[100px] rounded-[10px] p-4 md:p-6">
          <div className="flex items-start gap-3">
            <span className="shrink-0 block mt-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.95937 2.0416C9.54271 1.54993 10.4844 1.54993 11.051 2.0416L12.3677 3.1666C12.6177 3.37493 13.0927 3.54993 13.426 3.54993H14.8427C15.726 3.54993 16.451 4.27493 16.451 5.15827V6.57493C16.451 6.90827 16.626 7.37493 16.8344 7.62493L17.9594 8.9416C18.451 9.52493 18.451 10.4666 17.9594 11.0333L16.8344 12.3499C16.626 12.5999 16.451 13.0666 16.451 13.3999V14.8166C16.451 15.6999 15.726 16.4249 14.8427 16.4249H13.426C13.0927 16.4249 12.626 16.5999 12.376 16.8083L11.0594 17.9333C10.476 18.4249 9.53437 18.4249 8.96771 17.9333L7.65104 16.8083C7.40104 16.5999 6.92604 16.4249 6.60104 16.4249H5.14271C4.25937 16.4249 3.53437 15.6999 3.53437 14.8166V13.3916C3.53437 13.0666 3.36771 12.5916 3.15937 12.3499L2.03437 11.0249C1.55104 10.4499 1.55104 9.5166 2.03437 8.9416L3.15937 7.6166C3.36771 7.3666 3.53437 6.89993 3.53437 6.57493V5.1666C3.53437 4.28327 4.25937 3.55827 5.14271 3.55827H6.58437C6.91771 3.55827 7.38437 3.38327 7.63437 3.17493L8.95937 2.0416Z"
                  stroke="#EA4745"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 6.77502V10.8"
                  stroke="#EA4745"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.99609 13.3335H10.0036"
                  stroke="#EA4745"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>

            <p>
              <span className="text-[#EA4745]">Disclaimer:</span> The trading
              calculator is provided for illustrative purposes only. The results
              presented by this calculator are for educational and estimation
              purposes and you should not rely upon it as being complete and for
              making investment decisions. Real-time results can only be
              determined at the time of order execution.
            </p>
          </div>
        </div>
      </>
    );
}
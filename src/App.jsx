import Legend from "./components/Legend"
import StopWatch from "./components/StopWatch"


function App() {
  

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">BADASS GAMERS - TIME MACHINE</h1>
      <table className="table-auto w-full">
          <tr className="border">
            <td className="border p-6"></td>
            <td className="border"><h1 className="font-bold text-md">240HZ</h1><StopWatch/></td>
            <td className="border"><h1 className="font-bold text-md">240HZ</h1><StopWatch/></td>
            <td className="border"><h1 className="font-bold text-md">240HZ</h1><StopWatch/></td>
            <td className="border p-6"></td>
          </tr>
          <tr className="border">
            <td className="border"><h1 className="font-bold text-md">PS4</h1><StopWatch/></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"><h1 className="font-bold text-md">WHEEL</h1><StopWatch/></td>
          </tr>
          <tr className="border">
            <td className="border"><h1 className="font-bold text-md">PS4</h1><StopWatch/></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"></td>
          </tr>
          <tr className="border">
            <td className="border"></td>
            <td className="border"></td>
            <td className="border"><h1 className="font-bold text-md">144HZ</h1><StopWatch/></td>
            <td className="border"><h1 className="font-bold text-md">144HZ</h1><StopWatch/></td>
            <td className="border"><Legend/></td>
          </tr>
      </table>

    </>
  )
}

export default App

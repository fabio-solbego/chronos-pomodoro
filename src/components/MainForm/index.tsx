import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaltButton } from "../DefaultButton";
import { DefaltInput } from "../DefaultInput";

export function MainForm() {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaltInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='Digite algo'
        />
      </div>

      <div className='formRow'>
        <p>próximo intervalo é de 25 min</p>
      </div>

      <div className='formRow'>
        <Cycles />
      </div>

      <div className='formRow'>
        <DefaltButton icon={<PlayCircleIcon />} />
      </div>
    </form>
  );
}

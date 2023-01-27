export default function ToggleSwitch({comp, setVeganMode}) {
    
    return(
        <div className="toggle-switch">
        <input
          type="checkbox"
          className="toggle-switch-checkbox"
          name={comp}
          id={comp}
          onClick={(e) => setVeganMode(e.target.checked)}
        />
        <label className="toggle-switch-label" htmlFor={comp} >
          <span className="toggle-switch-inner" data-yes="Oui" data-no=" Non"/>
          <span className="toggle-switch-switch" />
        </label>
      </div>

    )
}
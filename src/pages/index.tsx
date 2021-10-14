import { IoPersonSharp } from '@react-icons/all-files/io5/IoPersonSharp';
import { IoLockClosed } from '@react-icons/all-files/io5/IoLockClosed';

export default function Home() {
  return (
    <div className="container">
      <div className="uk-light uk-padding uk-background">
        <h1 className="uk-heading-medium">Login</h1>

        <form>
          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon">
                <IoPersonSharp />
              </span>
              <input className="uk-input" type="text" />
            </div>
          </div>

          <div className="uk-margin">
            <div className="uk-inline">
              <span className="uk-form-icon">
                <IoLockClosed />
              </span>
              <input className="uk-input" type="text" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TabsInfoPanel } from './TabsElements';

const TabsNu = ({ professional }) => (
  <Tabs>
    <TabList>
      <Tab>
        <h3 className='unuscolor-txt'>Info</h3>
      </Tab>
      <Tab>
      <h3 className='unuscolor-txt'>Clients</h3>
      </Tab>
    </TabList>
    <TabPanel>
      <TabsInfoPanel>
        <p>{ professional.about }</p>
      </TabsInfoPanel>
    </TabPanel>
    <TabPanel>
      <div className='tab-panel-clients'>
        {
          (professional.clients.length && professional.clients.map((client) => (
            <img key={client.name} src={client.img} alt={client.name}/>
          ))) || <p>There is not clients yet</p>
        }
      </div>
    </TabPanel>
  </Tabs>
);

export default TabsNu
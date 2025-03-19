import React, { useState, useEffect, useRef, ChangeEvent } from 'react';

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  company: Company;
}

interface TrieNode {
  children: { [key: string]: TrieNode };
  users: User[];
}

function UsersSection() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  
  // Create a trie data structure for efficient search
  const userTrie = useRef<TrieNode>(createTrie());
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        setUsers(data);
        setFilteredUsers(data);
        setLoading(false);
        
        // Populate the trie with user names
        data.forEach((user: User) => {
          insertIntoTrie(userTrie.current, user.name.toLowerCase(), user);
        });
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);
  
  // Debounce function
  function useDebounce<T extends (arg: string) => void>(callback: T, delay: number) {
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    
    return (arg: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
      debounceRef.current = setTimeout(() => {
        callback(arg);
      }, delay);
    };
  }
  
  // Trie implementation for efficient search
  function createTrie(): TrieNode {
    return { children: {}, users: [] };
  }
  
  function insertIntoTrie(trie: TrieNode, name: string, user: User): void {
    let node = trie;
    
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      if (!node.children[char]) {
        node.children[char] = { children: {}, users: [] };
      }
      node = node.children[char];
      // Store users at each node to support prefix search
      node.users.push(user);
    }
  }
  
  function searchInTrie(trie: TrieNode, prefix: string): User[] {
    let node = trie;
    
    // Navigate to the node corresponding to the prefix
    for (let i = 0; i < prefix.length; i++) {
      const char = prefix[i];
      if (!node.children[char]) {
        return []; // Prefix not found
      }
      node = node.children[char];
    }
    
    return node.users;
  }
  
  const handleSearch = useDebounce((term: string) => {
    if (term.trim() === '') {
      setFilteredUsers(users);
    } else {
      const results = searchInTrie(userTrie.current, term.toLowerCase());
      setFilteredUsers(results);
    }
  }, 300);
  
  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    handleSearch(term);
  };
  
  return (
    <section id="users" className="py-20 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Users</h2>
      <div className="max-w-2xl mx-auto px-5 mb-12">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full p-4 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        />
      </div>
      
      {loading ? (
        <div className="text-center py-10 text-lg text-gray-600">Loading users...</div>
      ) : (
        <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredUsers.map(user => (
            <div key={user.id} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden">
                <img 
                  src={`https://ui-avatars.com/api/?name=${user.name}&background=random`} 
                  alt={user.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{user.name}</h3>
              <p className="text-gray-600 mb-1">{user.email}</p>
              <p className="text-gray-600">{user.company.name}</p>
            </div>
          ))}
          {filteredUsers.length === 0 && <p className="col-span-full text-center text-gray-600">No users found matching your search.</p>}
        </div>
      )}
    </section>
  );
}

export default UsersSection;